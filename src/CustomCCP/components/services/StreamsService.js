/* eslint-disable no-undef */
import { PERMISSIONS } from '../constants/global'
import 'amazon-connect-streams';

class StreamsService {
    // constructor() {

    // }
    // initCCPDataLayer() {
    //     connect.initCCP();
    //     // useEffect(() => {
    //     //     const container = document.getElementById("ccp");
    //     //     // eslint-disable-next-line no-undef
    //     //     connect.core.initCCP(container, {
    //     //       ccpUrl: CCP_URL,
    //     //       loginUrl: LOGIN_URL,
    //     //       loginPopup: true,
    //     //       loginPopupAutoClose: true,
    //     //       region: REGION,
    //     //       softphone: {
    //     //         allowFramedSoftphone: true
    //     //       }
    //     //     });
    //     //   }, []);

    // }

    getAgent() {
        connect.core.onInitialized(function() { console.log("====\n\n\n\nHERE WE Initialized") });
        console.log("Here!");
        let ag = new connect.Agent();
        console.log(ag);
        return ag
    }

    getConfiguration() {
        return this.getAgent().getConfiguration();
    }

    getPermissions() {
        return this.getAgent().getPermissions();
    }

    getSoftphoneAutoAccept() {
        return this.getAgent().getConfiguration().softphoneAutoAccept;
    }

    canAgentHandleOutboundCall() {
        return this.getPermissions().includes(PERMISSIONS.OUTBOUND_CALL);
    }

    dial(phoneNumber) {
        if(!this.canAgentHandleOutboundCall()) {
            console.log("Agent cannot make outbound calls, please set the required permissions");
            return;
        } 

        console.log(this.getAgent())
    }
}

export default new StreamsService();
/* eslint-enable no-undef */