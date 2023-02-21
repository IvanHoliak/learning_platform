import { useState } from "react";
import Tape from "components/tape";
import Input from "components/ui/input";
import Sprite from "components/ui/sprite";
import Typography from "components/ui/typography";
import useCustomQuery from "hooks/useCustomQuery";
import { getCategoriesList } from "services/getCategoriesList";
import { ICategoriesLists } from "types";
import { categoriesState } from "store/categories";
import { useRecoilState } from "recoil";

const Search = () => {
    const [valueInput, setValueInput] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categoriesId, setCategoriesId] = useRecoilState(categoriesState);
    const {isLoading, data} = useCustomQuery(["categories"], getCategoriesList);

    const onClickCategoriesHandler = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        setCategoriesId(prev => ({...prev, main_current_category_id: id, topic_current_category_id: +`${id}01`}));
    };

    return (
        <section className="w-full mt-[-8rem] h-[56.4rem] bg-Dark_gradient">
            <div className="w-container px-lg mx-auto flex flex-col items-center">
                <Typography
                    tagName="h3"
                    className="font-extra text-heading_3 text-White mt-[15.2rem] text-center"
                >
                    Find a course to help you reach <br /> where you want to go
                </Typography>
                <div className="w-[80rem] h-[6.4rem] rounded-[4px] bg-White flex items-center relative mt-[5.6rem]">
                    <Input 
                        id="input"
                        placeholder="Search for anything"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        className="w-full h-full pl-[2.4rem] pr-[6.4rem] rounded-[4px] font-regular text-paragraph_1 text-Black placeholder:font-regular placeholder:text-paragraph_2 placeholder:text-Grey"
                        label={
                            <Sprite 
                                id="icon-search"
                                size="medium"
                                className="stroke-Blue"
                            />
                        }
                        labelClassName="cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 -translate-x-[2rem]"
                    />
                </div>
                {!isLoading && (
                    <Tape 
                        data={(data as ICategoriesLists)?.main || []}
                        className="mt-[4.8rem] justify-center"
                        listClassName="max-w-[80rem]"
                        onClickCategories={(e, id) => onClickCategoriesHandler(e, id)}
                    />
                )}
            </div>
        </section>
    )
};

export default Search;