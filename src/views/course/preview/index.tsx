import { useParams } from "react-router-dom";
import PreviewContent from "components/course/preview/content";
import PreviewHeading from "components/course/preview/heading/intex";
import useCustomQuery from "hooks/useCustomQuery";
import { getCourseDetails } from "services/getCourseDetails";
import { ICourseDetails } from "types";
import Loader from "components/ui/loader";

const CoursePreview = () => {
    const {id} = useParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {isLoading, error, data} = useCustomQuery(["course", `${id}`], () => getCourseDetails(+id!));

    if(isLoading){
        return (
            <>
                <div className="w-full mt-[-8rem] bg-Dark_gradient min-h-[51.6rem] flex items-center justify-center">
                    <Loader />
                </div>
                <div className="w-full mt-[-8rem] bg-White min-h-[51.6rem] flex items-center justify-center">
                    <Loader 
                        className="!border-Grey"
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <PreviewHeading {...data as ICourseDetails}/>
            <PreviewContent {...data as ICourseDetails}/>
        </>
    );
};

export default CoursePreview;

//section 1 lesson 1 8312878