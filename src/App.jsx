import { useState } from "react";
import Form from "./Form";

import "./css/App.css";

function Header() {
    return (
        <h3 className="has-text-centered">UI clearance status checker 2024/2025</h3>
    )
}

function Info() {
    return (
        <div className="note">
            <p><u>Note</u></p>
            {/* <p>You can verify manually <a href="https://ui.edu.ng/news/candidates-20242025-academic-session-yet-be-cleared-admissions-office-undergraduates">here</a></p> */}
            <p>This web app is <strong>unofficial</strong>. It is not owned by <em>UI</em>.</p>
            <p>It is created by <a href="https://github.com/tsolawoyin">tsolawoyin</a>, also a UI student, to help others check their cleareance status easily.</p>
            <p>The application works by checking the list of uncleared candidates provided <a href="https://ui.edu.ng/news/candidates-20242025-academic-session-yet-be-cleared-admissions-office-undergraduates">here</a> on the official UI page. If your Reg num is found, <em><strong>you are not cleared yet</strong></em>. And if not, the app assumes that <em><strong>you have probably been cleared.</strong></em></p>
            <p>This app is made for convenience and fast look up. You can still verify manually <a href="https://ui.edu.ng/news/candidates-20242025-academic-session-yet-be-cleared-admissions-office-undergraduates">here</a></p>
            <p>This program is open source. <em>MIT License</em>. Code can be found <a href="https://github.com/tsolawoyin/ui-clearance-checker-2024-2025">here</a></p>
            <p>You can also check out my web app, <a href="https://boots5.netlify.app"><em>Boots</em></a>, highly recommended for those who are writing UTME.</p>
        </div>
    )
}

function App() {

    return (
        <div className="app">
            <div className="div">
                <Header />
                <Form />
                <Info />
            </div>
        </div>
    )
}

export default App;