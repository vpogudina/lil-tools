import { withRouter } from 'react-router-dom';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import styled from 'styled-components';


const StyledLabel = styled.label`
  border: 2px solid #326881;
  border-radius: 10px;
  display: inline-block;
  padding: 10px 12px;
  cursor: pointer;
  background-color: #8be3e9;
  margin: 50px auto;
  height: 50px;
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: inline-flex;
  align-content: space-around;
  justify-content: space-around;
`

const StyledInput = styled.input`
  display: none;
`
const CANARY = "canary";
const INTEG_TEST = "integ";

function GetAgentLogs() {

  const getLogs = (event, sourceOfLogs) => {
    var csvInput = event.target;
    var file = csvInput.files[0];
    let data;
    let agentLogs = [];
    
    var csvData=[];
    
    Papa.parse(file, {
      download: true,
      header: true,
      skipEmptyLines: true,
      forceUniformNewline: true,
      step: function(row) {
          csvData.push(row.data);
      },
      complete: function(results) {
        console.log('Complete', csvData.length, 'records.'); 
        data = csvData;
        let chunks;
        if (sourceOfLogs === CANARY) {
          chunks = data.filter(event => event.message.includes('Agent log chunk'));
        } else if (sourceOfLogs === INTEG_TEST) {
          let s = 0;
          chunks = [];
          for (let t = 0; t < data.length; t++ ) {
            if(data[t].message.includes('Agent log chunk')) {
              chunks[s] = data[t+1]; 
              s++
            }
          }
        }

        let chunkMessages = chunks.map( a => {
            let newLog = a?.message;
            if (newLog) {
            let i;
            if (sourceOfLogs === CANARY) {
              i = newLog.indexOf('log chunk:') + 10; 
            } else if (sourceOfLogs === INTEG_TEST) {
              i = (newLog.indexOf('log chunk:') > -1) ? newLog.indexOf('log chunk:') + 10 : 0; 
            }
            return newLog.slice(i);
            } else {
            return "";
            }
            
        });
        let k = 0;
        while(k < chunkMessages.length && !chunkMessages[k].includes('"_logs"')) {
        k++;
        }
        for (let i = k; i < chunkMessages.length; i++) {

        let agentLog = [];
        let j = i;
        
        do {
            chunkMessages[j] = chunkMessages[j].replace(/\n/g, "");
            chunkMessages[j] = chunkMessages[j].replace(/\\ /g, "\\\\ ");
            agentLog.push(chunkMessages[j]);
            j++;
        } while (j < chunkMessages.length && !chunkMessages[j].includes('"_logs"'));
        agentLogs.push(agentLog);
        
        i = j - 1;
        }
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        let logs;
        for (let i = 0; i < agentLogs.length; i++) {
        
        logs = agentLogs[i].reduce(reducer);
        let k = logs.indexOf('"_logs": ') + 9;
        let m;
        if (sourceOfLogs === CANARY) {
          m = logs.indexOf('"_rolledLogs"') - 5;
        } else if (sourceOfLogs === INTEG_TEST) {
          m = logs.indexOf('"_rolledLogs"') - 6;
        }

        logs = logs.slice(k, m);
        var blob = new Blob([logs], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `agent_log_${i}.txt`);
        }
      }
    });
  }

    return (
      <>
      <ButtonContainer>
        <StyledLabel htmlFor="file-upload" className="custom-file-upload">
            Choose csv to get txt file(s) with CANARY agent logs
        </StyledLabel>
        <StyledInput id="file-upload" name="file-upload" type="file" accept=".csv" onChange={event => getLogs(event, CANARY)}></StyledInput>
      </ButtonContainer>
      <ButtonContainer>
        <StyledLabel htmlFor="file-upload-2" className="custom-file-upload-2">
            Choose csv to get txt file(s) with agent logs from INTEG TEST csv
        </StyledLabel>
        <StyledInput id="file-upload-2" name="file-upload-2" type="file" accept=".csv" onChange={event => getLogs(event, INTEG_TEST)}></StyledInput>
        
      </ButtonContainer>
      </>
      
    );
  }
  
export default withRouter(GetAgentLogs);