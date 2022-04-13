import clsx from "clsx";
import Link from "next/link";
import React from "react";

const MainButton = ({color, link = '/', text, size, type, onClick=()=>{}}) => {
    const v = type ?
        <button
            className={clsx('mainButton', color, size)}
            type={type}
            onClick={()=>onClick()}
        >
            {text}
        </button> :
        <Link href="#"><a className={clsx('mainButton', color, size)}>{text}</a></Link>
    return (

        <div className={clsx('mainButton__wrapper', size)}>
            <div className={clsx('mainButton-cover', size)}/>
            {v}
        </div>
    );
};

export default MainButton;
