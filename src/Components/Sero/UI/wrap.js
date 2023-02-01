import React from "react";

function Wrap({children}) {
    return (
        <>
            <div className="flex space-x-[23.53px] mt-[46px] max-md:flex-col max-md:space-x-0 max-md:space-y-11">{children}</div>
        </>
    )
}

export default Wrap;
