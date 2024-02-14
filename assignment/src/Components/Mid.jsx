
import { Phone, Mail, WhatsApp, LocationOn } from "@mui/icons-material";
import "./profile.css";

const Mid = () => {
  return (
    <div className="flex justify-around items-center h-16 mt-5 mb-6 rounded-xl midpart">
      <div className="icon-container">
        <a href="tel:+75170520003"><Phone /></a>
      </div>
      <div className="icon-container">
        <a href="mailto:kshitijakadam219@gmail.com"><Mail /></a>
      </div>
      <div className="icon-container">
        <a href="https://wa.me/7517052003"><WhatsApp /></a>
      </div>
      <div className="icon-container">
        <a href="https://maps.app.goo.gl/CWQxDbKFhsWLCkJG9"><LocationOn /></a>
      </div>
    </div>
  );
};

export default Mid;
