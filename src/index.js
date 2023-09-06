import $ from "jquery";
import { Model } from "survey-jquery";
import "survey-jquery/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { themeJson } from "./theme";

const survey = new Model(json);
// You can delete the line below if you do not use a customized theme
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElement").Survey({ model: survey });