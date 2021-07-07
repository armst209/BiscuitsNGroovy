import React from 'react'
import {initAccount, accountIsInitialized} from "../../utils/flow"
function LinkFlowButton() {
    let isInitialized = accountIsInitialized();
    if(isInitialized == "Account is not setup") {
        return (<div onClick={initAccount}>Link Flow Account</div>)
    } else {
      return (<div>Flow Account Linked!</div>)
    }
}

export default LinkFlowButton