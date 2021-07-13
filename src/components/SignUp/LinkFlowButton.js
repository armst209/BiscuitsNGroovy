import { React, useEffect, useState} from 'react'
import {initAccount, accountIsInitialized} from "../../utils/flow"
import * as fcl from "@onflow/fcl"
function LinkFlowButton() {

    const [isInitialized, setIsInitialized] = useState(false);
    async function updateInitializedComponent() { 
        if (isInitialized == true) {
            return;
        }
        await initAccount();
        accountIsInitialized().then(firstAccountState => {
            console.log(firstAccountState);
            setIsInitialized(firstAccountState);
        });
    }

    async function logOutOfFlow(){
        fcl.unauthenticate();
        accountIsInitialized().then(firstAccountState => {
            console.log(firstAccountState);
            setIsInitialized(firstAccountState);
        });
    }
    
    if(!isInitialized) {
        return (<div onClick={updateInitializedComponent}>Link Flow Account</div>)
    } else {
      return (<div>
          <button type="submit">SIGN UP</button>
          <div onClick={logOutOfFlow}>Or Link Different Flow Account</div>
          </div>)
    }
}

export default LinkFlowButton