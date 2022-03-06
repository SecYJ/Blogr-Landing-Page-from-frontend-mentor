import IntroBanner from "./IntroBanner";
import IntroRow from "./IntroRow";

const extensibleEditor = {
    title: "Introducing an extensible editor",
    texts: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    title2: "Robust content management",
    texts2: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
};

const laptopData = {
    title: "Free, open, simple",
    texts: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    title2: "Powerful tooling",
    texts2: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
};

const Intro = () => {
    return (
        <main className="py-[100px]">
            <div className="px-6 xl:px-[165px]">
                <IntroRow
                    firstTitle={extensibleEditor.title}
                    firstParagraph={extensibleEditor.texts}
                    secondTitle={extensibleEditor.title2}
                    secondParagraph={extensibleEditor.texts2}
                    heading="Designed for the future"
                />
            </div>
            <IntroBanner />
            <div className="px-6 xl:px-[165px]">
                <IntroRow
                    firstTitle={laptopData.title}
                    firstParagraph={laptopData.texts}
                    secondTitle={laptopData.title2}
                    secondParagraph={laptopData.texts2}
                    imgPosition="left"
                />
            </div>
        </main>
    );
};

export default Intro;
