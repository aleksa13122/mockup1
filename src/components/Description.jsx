import React from "react";
import "./Description.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Description() {
  const { t } = useContext(LanguageContext);
  return <div className="description">{t("description.text")}</div>;
}
