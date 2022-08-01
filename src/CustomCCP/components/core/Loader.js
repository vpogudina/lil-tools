import React, {PureComponent} from "react"
import { ClipLoader, BeatLoader} from "react-spinners";
import styled from "styled-components";

const LoaderWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default class Loader extends PureComponent {
  render() {
    return (
      <LoaderWrapper className="loader">
        <ClipLoader size={15} color={this.props.color || "#fff"} {...this.props}/>
      </LoaderWrapper>
    )
  }
}

export class TypingLoader extends PureComponent {
  render() {
    return (
      <BeatLoader size={5} {...this.props} />
    )
  }
}
