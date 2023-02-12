// import translateCss from "./Translate.module.css"
import React from "react";
import { useEffectOnce } from "../../../utils/useEffectOnce.ts";
const Translate = () => {

    const setCookie = (key, value, expiry) => {
        var expires = new Date();
        expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }
    const googleTranslateElementInit = () => {
        setCookie('googtrans', '(remove this text in bracket for it to work) /en/zh-CN',1);
        new window.google.translate.TranslateElement(
        {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
        );
    };
    useEffectOnce(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default Translate;