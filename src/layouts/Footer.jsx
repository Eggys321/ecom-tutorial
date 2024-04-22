import React from "react";
import { dataFooter } from "../../FooterDb";
import "../styles/Footer.css"

const Footer = () => {
  const copyRightYear = new Date().getFullYear()
  return (
    <>
    <div className="footer">

    <footer className="mt-5 bg-black text-white">
      <div className="container  d-md-flex justify-content-between align-items-center p-4">
        {dataFooter.map((datumFooter) => {
          const { id, title, contact, about, careers, blog } = datumFooter;
          return (
            <div key={id}>
              <h2> {title} </h2>
              <ul className="list-unstyled lh-lg">
                <li> {contact} </li>
                <li> {about} </li>
                <li> {careers} </li>
                <li> {blog} </li>
              </ul>
            </div>
          );
        })}
      </div>
      <p className="text-center">
        Copyright &copy; {copyRightYear} Eggy.com. All rights resverd
      </p>
    </footer>
    </div>
    </>
  );
};

export default Footer;
