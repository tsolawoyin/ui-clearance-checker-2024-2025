import { useState } from "react";

import { notCleared } from "./notCleared";

function Form() {
    let [regNum, setRegNum] = useState("");
    let [successInfo, setSuccessInfo] = useState("");
    let [info, setInfo] = useState("");
    let [errInfo, setErrInfo] = useState("")
    let regex = /^(\d+)?(2024\d{8}[a-zA-Z]{2})$/

    function validate(regNum, main) {
        if (main.includes(regNum)) {
            let x = main.match(regex);
            let line = x[1];
            setErrInfo(`Oops you haven't be cleared. Your reg num is found at line ${line}`)
            setInfo("");
            setSuccessInfo("");
            return true;
        }

        return false;
    }

    function handleSubmit(ev) {
        ev.preventDefault();

        let list = notCleared.split("\n");

        if (regex.test(regNum)) {
            let jambReg = list.find(r => validate(regNum, r))
            if (!jambReg) {
                // if it is false at this point, then user have been cleared.
                setSuccessInfo("You have probably been cleared.");
                setInfo("");
                setErrInfo(""); // set err inf to nothing
            }
        } else {
            setInfo("Invalid reg number! Check again");
            setSuccessInfo("");
            setErrInfo("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="">
                <input type="text" className="input" placeholder="enter your jamb reg number..." value={regNum} onChange={(ev) => {
                    setRegNum(ev.target.value);
                }} />
            </label>
            <button className="button is-info" style={{
                marginTop: ".5em"
            }}>Check</button>
            {successInfo && <p className="has-text-success">{successInfo}. Check <a href="https://admissions.ui.edu.ng/#/applicant/applicant-dashboard">here</a> regularly to know the status of your clearance.</p>}
            {
                info && <p className="has-text-warning">{info}</p>
            }
            {errInfo && <p className="has-text-danger">{errInfo}. Click <a href="https://ui.edu.ng/news/candidates-20242025-academic-session-yet-be-cleared-admissions-office-undergraduates">here</a> for more information.</p>}
        </form>
    )
}

export default Form;