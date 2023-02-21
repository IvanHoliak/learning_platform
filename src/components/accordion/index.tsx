import { FC } from "react";
import cx from "classnames";
import { ICourseSection } from "types";
import AccordionSectionList from "components/list/accordion_list/accordion_section_list";

interface IAccordion {
    data: ICourseSection[],
    preview: boolean,
    className?: string,
};

const Accordion: FC<IAccordion> = ({data, className, preview}) => {
    const classNames = cx("flex flex-col", className);
    
    return (
        <div className={classNames}>
            <AccordionSectionList 
                data={data}
                preview={preview}
            />
        </div>
    );
};

export default Accordion;
