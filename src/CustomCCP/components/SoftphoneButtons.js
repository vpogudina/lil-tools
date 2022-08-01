import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'CustomCCP/components/core/index';
import { defaultTheme } from 'CustomCCP/theme/index';
// // import { NUMBER_PAD_STRINGS, QC_STRINGS, CALL_BEHAVIOR_TEXT_LABEL, CALL_BEHAVIOR_LIVE_MESSAGE } from './constants';
// // import { HiddenText } from "connect-theme/Helpers";
// // import { icon_hold, icon_resume, icon_mute, icon_unmute, icon_join, icon_swap, icon_number_pad, icon_more, icon_leave } from 'connect-images/softphone';
// // import { icon_quick_connects } from 'connect-images';
// // import { icon_phone } from 'connect-images/header';
// import { SOFTPHONE_ACTIONS } from "connect-constants";


const SoftphoneButton = styled(Button)`
  width: 100%;
  @media screen and (max-width: ${({ theme, collapseBreakpoint }) => theme.breakpoints[collapseBreakpoint] || 0}) {
    width: auto;
  }
  ${({shaded}) => shaded && `opacity: 0.4;`}
  ${({smallButton}) => (smallButton) && `
    padding: 0 10px;
    width: auto !important;
    > div:first-child {
      margin-right: 0;
    }
    > div:last-child {
      display: none;
    }
  `}
`;
// const ResumeHold = styled(SoftphoneButton)`
//   svg {
//     height: 0.6875rem;
//   }
// `;
// const Mute = styled(SoftphoneButton)`
//   svg {
//     height: 0.9375rem;
//   }
// `;
// const Call = styled(SoftphoneButton)`
//   width: auto;
//   min-width: 106px;
// `;
// const BargeIn = styled(SoftphoneButton)`
//   svg {
//     height: 0.9375rem;
//   }
// `;
// const NumberpadMini = styled(SoftphoneButton)`
//   width: auto;
//   svg {
//     margin: 0 auto;
//   }
//   height: 2.1875rem;
// `;

// ResumeHoldButton.propTypes = {
//   buttonType: PT.oneOf(['resume', 'hold']).isRequired
// };
// function ResumeHoldButton({ buttonType, loading, action, ...rest }) {
//   const [lastPressedButtonLabel, setLastPressedButtonLabel] = useState('');
//   const isResumeButton = buttonType === 'resume';
//   const label = isResumeButton ? IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.resume) : IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.hold);
//   const icon = isResumeButton ? icon_resume : icon_hold;
//   const dataTestId = isResumeButton ? 'ccp-softphone-resume-button' : 'ccp-softphone-hold-button';

//   const prevButtonType = usePrevious(buttonType);
//   const shouldFocusOnSwitching = (prevButtonType !== buttonType);
//   const btnRef = useRef();
//   useEffect(() => {
//     if (shouldFocusOnSwitching) {
//       btnRef.current.focus();
//     }
//   }, [btnRef, shouldFocusOnSwitching]);

//   const getLiveMessage = () => {
//     switch(lastPressedButtonLabel) {
//       case '':
//         return '';
//       case IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.resume):
//         return IntlService.format(CALL_BEHAVIOR_LIVE_MESSAGE.resumeButtonPressed);
//       case IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.hold):
//         return IntlService.format(CALL_BEHAVIOR_LIVE_MESSAGE.holdButtonPressed);
//       default:
//         return '';
//     }
//   };
  
//   function onClick () {
//     setLastPressedButtonLabel(label);
//     action();
//   }

//   return (
//     <ResumeHold
//       data-testid={dataTestId}
//       onClick={onClick}
//       icon={icon}
//       loaderColor={defaultTheme.palette.black}
//       loading={loading}
//       iconSize="mini"
//       aria-label={label}
//       btnRef={btnRef}
//       {...rest}
//     >
//       {label}
//       <HiddenText aria-live="assertive" role="alert">
//         { getLiveMessage() }
//       </HiddenText>
//     </ResumeHold>
//   )
// }

// function MuteUnmuteButton({ action, isOnMute, isMultiparty, isMultipartyEnabled, smallButton, ...rest }) {
//   if (!StreamsService.isSoftphoneEnabled() && !isMultiparty) {
//     return <React.Fragment />;
//   }
//   const [lastPressedButtonLabel, setLastPressedButtonLabel] = useState('');
//   const label = isOnMute ? IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.unmute) : IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.mute);
//   //invert mute/unmute icons only for N+ UI
//   const shouldRevertMuteIcons = isMultiparty || isMultipartyEnabled || smallButton;
//   const icon = ((isOnMute && !shouldRevertMuteIcons) || (!isOnMute && shouldRevertMuteIcons)) ? icon_unmute : icon_mute;
//   const dataTestId = isOnMute ? 'ccp-softphone-unmute-button' : 'ccp-softphone-mute-button';

//   const prevButtonType = usePrevious(isOnMute);
//   const shouldFocusOnSwitching = (prevButtonType !== isOnMute);
//   const btnRef = useRef();
//   useEffect(() => {
//     if (shouldFocusOnSwitching) {
//       btnRef.current.focus();
//     }
//   }, [btnRef, shouldFocusOnSwitching]);

//   const getLiveMessage = () => {
//     switch(lastPressedButtonLabel) {
//       case '':
//         return '';
//       case IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.unmute):
//         return IntlService.format(CALL_BEHAVIOR_LIVE_MESSAGE.unmuteButtonPressed);
//       case IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.mute):
//         return IntlService.format(CALL_BEHAVIOR_LIVE_MESSAGE.muteButtonPressed);
//       default:
//         return '';
//     }
//   }
//   function onClick () {
//     setLastPressedButtonLabel(label);
//     action();
//   }

//   return (
//     <Mute
//       onClick={onClick}
//       data-testid={dataTestId}
//       icon={icon}
//       aria-label={label}
//       btnRef={btnRef}
//       isMultiparty={isMultiparty}
//       smallButton={smallButton}
//       {...rest}
//     >
//       {label}
//       <HiddenText aria-live="assertive" role="alert">
//         { getLiveMessage() }
//       </HiddenText>
//     </Mute>
//   );
// }

// function HoldAllButton({ action, loading, ...rest }) {
//   const label = IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.holdAll);
//   return (
//     <ResumeHold
//       data-testid="ccp-softphone-holdall-button"
//       onClick={action}
//       icon={icon_hold}
//       loaderColor={defaultTheme.palette.black}
//       loading={loading}
//       iconSize="mini"
//       aria-label={label}
//       aria-pressed="false"
//       {...rest}>
//       {label}
//     </ResumeHold>
//   );
// }

// function ResumeAllButton({ action, loading, ...rest }) {
//   const label = IntlService.format(CALL_BEHAVIOR_TEXT_LABEL.resumeAll);
//   return (
//     <ResumeHold
//       data-testid="ccp-softphone-resumeall-button"
//       onClick={action}
//       icon={icon_resume}
//       loaderColor={defaultTheme.palette.black}
//       loading={loading}
//       iconSize="mini"
//       aria-label={label}
//       aria-pressed="true"
//       {...rest}>
//       <FormattedMessage {...CALL_BEHAVIOR_TEXT_LABEL.resumeAll} />
//     </ResumeHold>
//   );
// }

// function NumberPadButton({ action, numberpadFocusBtnRef, ...rest }) {
//   return (
//     <SoftphoneButton data-testid="ccp-softphone-numberpad-button" onClick={action} icon={icon_number_pad} aria-label={IntlService.format(NUMBER_PAD_STRINGS.buttonLabel)} btnRef={numberpadFocusBtnRef} {...rest}>
//       <FormattedMessage {...NUMBER_PAD_STRINGS.buttonLabel} />
//     </SoftphoneButton>
//   );
// }

// function QuickConnectButton({ action, quickConnectFocusBtnRef, ...rest }) {
//   return (
//     <SoftphoneButton data-testid="ccp-softphone-qc-button" onClick={action} icon={icon_quick_connects} aria-label={IntlService.format(QC_STRINGS.buttonLabel)} btnRef={quickConnectFocusBtnRef} {...rest}>
//       <FormattedMessage {...QC_STRINGS.buttonLabel} />
//     </SoftphoneButton>
//   );
// }

// function SwapButton({ action, loading, ...rest }) {
//   return (
//     <SoftphoneButton data-testid="ccp-softphone-swap-button" key={'swap'} onClick={action} icon={icon_swap} loaderColor={defaultTheme.palette.black} loading={loading} {...rest}>
//       <FormattedMessage id="connect-softphone-swap-button-text" defaultMessage="Swap" />
//     </SoftphoneButton>
//   );
// }

// function JoinButton({ action, loading, ...rest }) {
//   return (
//     <SoftphoneButton
//       data-testid="ccp-softphone-join-button"
//       onClick={action}
//       icon={icon_join}
//       loaderColor={defaultTheme.palette.black}
//       loading={loading}
//       iconSize={'medium'}
//       {...rest}>
//       <FormattedMessage id="connect-softphone-conference-button-text" defaultMessage="Join" />
//     </SoftphoneButton>
//   );
// }

// function CallButton({ action, ...rest }) {
//   return (
//     <Call data-testid="ccp-softphone-call-button" onClick={action} styledType="primary" iconSize={'mini'} icon={icon_phone} {...rest}>
//       <FormattedMessage id="connect-softphone-qc-call-button" defaultMessage={'Call'} />
//     </Call>
//   );
// }

// function NumberPadButtonMini({ action, ...rest }) {
//   return <NumberpadMini data-testid="ccp-softphone-nummberpadmini-button" onClick={action} iconSize={'small'} icon={icon_number_pad} {...rest} />;
// }

// //multiparty
// function MoreButton({ action, loading, shaded, ...rest }) {
//   return (
//     <SoftphoneButton
//       data-testid="ccp-softphone-more-button"
//       onClick={action}
//       icon={icon_more}
//       loaderColor={defaultTheme.palette.black}
//       loading={loading}
//       shaded={shaded}
//       iconSize={'medium'}
//       {...rest}>
//       <FormattedMessage {...SOFTPHONE_ACTIONS.more} />
//     </SoftphoneButton>
//   );
// }

// //multiparty
// function LeaveButton({ action, ...rest }) {
//   return (
//     <SoftphoneButton data-testid="ccp-softphone-leave-button" key={'leave'} onClick={action} icon={icon_leave} {...rest}>
//       <FormattedMessage {...SOFTPHONE_ACTIONS.leave} />
//     </SoftphoneButton>
//   );
// }

export {
//   // JoinButton,
//   // SwapButton,
//   // QuickConnectButton,
//   // NumberPadButton,
//   // HoldAllButton,
//   // ResumeAllButton,
//   // ResumeHoldButton,
//   // MuteUnmuteButton,
//   // CallButton,
  SoftphoneButton,
//   // //multiparty
//   // MoreButton,
//   // LeaveButton
};
