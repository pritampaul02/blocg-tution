import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Banner from "../components/Home/Banner";
import CText from "../components/ui/Text";

function LandingPage() {
    return (
        <>
            <Banner />
            <CText
                text="Landing Page"
                size="h1"
                className={"text-primary"}
            ></CText>
        </>
    );
}

export default LandingPage;
