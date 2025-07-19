import GlitchText from "./components/GlitchText";
import SplashCursor from "./components/SplashCursor";
import ChromaGrid from "./components/ChromaGrid";
import Lightning from "./components/Lightning";
import ProfileCard from "./components/ProfileCard";
import InfiniteMenu from "./components/InfiniteMenu";

export default function Home() {
    const items = [
        {
            image: "./mate_images/mate_1.jpg",
            title: "Mate Mgeladze",
            subtitle: "თესლი",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
        },
        {
            image: "./mate_images/mate_2.jpg",
            title: "Mate Mgeladze",
            subtitle: "ლექტორი",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #aeb910ff, #000)",
        },
        {
            image: "./mate_images/mate_3.jpg",
            title: "Mate Mgeladze",
            subtitle: "დელეგატი",
            borderColor: "#e68c07ff",
            gradient: "linear-gradient(180deg, #1eb910ff, #000)",
        },
        {
            image: "./mate_images/mate_4.jpg",
            title: "Mate Mgeladze",
            subtitle: "კურსდამთავრებული",
            borderColor: "#c59d18ff",
            gradient: "linear-gradient(180deg, #b91051ff, #000)",
        },
        {
            image: "./mate_images/mate_5.jpg",
            title: "Mate Mgeladze",
            subtitle: "არჩევნები",
            borderColor: "#18abc5ff",
            gradient: "linear-gradient(180deg, #1083b9ff, #000)",
        },
        {
            image: "./mate_images/mate_6.jpg",
            title: "Mate Mgeladze",
            subtitle: "მსმენელი",
            borderColor: "#6cc518ff",
            gradient: "linear-gradient(180deg, #b9102cff, #000)",
        },
    ];

    const InfiniteMenuItems = [
        {
            image: "./mate_images/mate_7.jpg",
            title: "მათე ეწევა",
            description: "ბესო და მათე - მაგარი კაცები",
        },
        {
            image: "./mate_images/mate_8.jpg",
            title: "ლამაზები",
            description: "ბესო და მათე - მაგარი კაცები",
        },
        {
            image: "./mate_images/mate_9.png",
            title: "მონადირეები",
            description: "დასდევენ ქოცებს",
        },
        {
            image: "./mate_images/mate_10.jpg",
            title: "მათეს ვნებანი",
            description: "მათე შიგ გიმზერს",
        },
        {
            image: "./mate_images/mate_11.jpg",
            title: "ჭყოიძის ქვესკნელი",
            description: "მათე და ძმები დალევის შემდეგ",
        },
    ];

    return (
        <>
            {/* <SplashCursor
                SIM_RESOLUTION={128}
                DYE_RESOLUTION={1440}
                CAPTURE_RESOLUTION={512}
                DENSITY_DISSIPATION={5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.8}
                PRESSURE_ITERATIONS={20}
                CURL={10}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={4000}
                SHADING={true}
                COLOR_UPDATE_SPEED={20}
            /> */}
            <div className="demo-container-reveal">
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <Lightning
                        hue={220}
                        xOffset={0}
                        speed={1}
                        intensity={1}
                        size={1}
                    />
                </div>
                <GlitchText
                    speed={1}
                    enableShadows={true}
                    enableOnHover={true}
                    className="mateo-custom-text"
                >
                    Mate Mgeladze (Mateo)
                </GlitchText>
            </div>

            <div style={{ position: "relative", marginTop: "5rem" }}>
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>

            <div style={{ position: "relative" }}>
                <InfiniteMenu items={InfiniteMenuItems} />
            </div>

            <div className="profile-card">
                <h1>საიტი შექმნა</h1>
                <ProfileCard
                    name="ბექა(რკო) არაბიძე"
                    title="ადამიანზე მაღალი"
                    avatarUrl={"./mate_images/beqa_1.png"}
                    showUserInfo={false}
                    enableTilt={true}
                    showBehindGradient={false}
                />
            </div>
        </>
    );
}
