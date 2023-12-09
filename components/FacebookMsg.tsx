"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <>
      <FacebookProvider appId="803597694423701" chatSupport>
        <CustomChat pageId="106453562488245" minimized={true} />
      </FacebookProvider>
    </>
  );
};

export default FacebookMsg;
