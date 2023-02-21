import { FC } from "react";
import cx from "classnames";
import { ICard } from "types";
import FeaturesCard from "components/card/features_card";

interface IFeaturesList {
    data: ICard[],
    className?: string
}

const FeaturesList: FC<IFeaturesList> = ({data, className}) => {
    return (
        <div className={cx("flex flex-wrap gap-[3.2rem]", className)}>
            {data.map(item => (
                <FeaturesCard key={item.id} {...item}/>
            ))}
        </div>
    );
};

export default FeaturesList;