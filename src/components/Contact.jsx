import React, { useState } from "react";
import { image } from "../assets/image";
import { IconButton, Typography } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

function Contact() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <div className="bg-[#030712] text-center p-14">
        <div className="flex items-center justify-center ">
          <p className=" bg-[#374151] text-[#f9fafb] font-bold rounded-xl px-4 py-1 ">
            Get in touch
          </p>
        </div>
        <p className="text-[#d1d5db] font-semibold pt-4">
          What’s next? Feel free to reach out to me if you are looking for a{" "}
          <br className="md:hidden" /> developer, have a query, or simply want
          to connect.
        </p>
        <div className="flex items-center gap-x-4 justify-center text-white mt-4">
        <Typography variant="lead" className="font-bold">asishsahu946@gmail.com</Typography>
        <IconButton
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy("asishsahu946@gmail.com");
            setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-white" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          )}
        </IconButton>
      </div>
        <div className="flex items-center gap-x-4 justify-center  text-white">
        <Typography variant="lead" className="font-bold">+91 8895708555</Typography>
        <IconButton
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy("+91 8895708555");
            setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-white" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          )}
        </IconButton>
      </div>
        <p className="text-[#d1d5db] pt-5">
          You may also find me on these platforms!
        </p>
        <div className=" flex mx-auto  mt-4 gap-2 w-20 md:w-24 ">
          <a href="https://github.com/asishsahu946">
            <img src={image.github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/asishsahu946/">
            <img src={image.linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/asishsahu946/?hl=en">
            <img src={image.instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="bg-[#111827] text-[#d1d5db] p-3">
        <h1 className="font-semibold text-center">
          <img className="w-5 inline" src={image.copyright} alt="" />{" "}
          2024 | Coded{" "}
          <img
            className=" w-5 inline"
            src={image.programming}
            alt=""
          />{" "}
          by Asish Kumar sahu
        </h1>
      </div>
    </div>
  );
}

export default Contact;
