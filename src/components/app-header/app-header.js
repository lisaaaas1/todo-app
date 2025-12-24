import React from "react";
import './app-header.css';
import App from "../app/app";

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header">
            <h1>Список твоих важных дел</h1>
            <h2>{todo} дел ждут тебя, {done} ты уже выполнил</h2>
        </div>
    );
};

export default AppHeader;