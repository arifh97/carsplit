import { useState } from "react";
const ReadMoreReadLess = ({shortContent, longContent}) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="content">
            {shortContent}
            <span className={`long-text ${collapse ? "expanded" : ""}`}>
            {longContent}
            </span> 
            <a onClick={() => setCollapse((prev) => !prev)}> Read More</a>
        </div>
    )
}
export default ReadMoreReadLess;