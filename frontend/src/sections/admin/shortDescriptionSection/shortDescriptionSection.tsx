import React from 'react';
import styles from "./shortDescriptionSection.module.scss";
import {useActions} from "../../../hooks/useActions";
import TextAreaWithVisibleError from "../../../components/textAreaWithVisibleError/textAreaWithVisibleError";

const ShortDescriptionSection = () => {
    const [shortDescriptionData, setShortDescriptionData] = React.useState<string>('');
    const [isVisibleError, setIsVisibleError] = React.useState(false);
    const {setShortDescription} = useActions();

    const saveShortDescToRedux = () => {
        if(shortDescriptionData === '') {
            setIsVisibleError(true);
            return;
        }
        setShortDescription(shortDescriptionData);
        setIsVisibleError(false);
    }

    return (
        <div className={styles.wrapper}>
            <TextAreaWithVisibleError
                valueToWrite={shortDescriptionData}
                setValueToWrite={setShortDescriptionData}
                onBlurFunc={saveShortDescToRedux}
                placeholderData={"Short description..."}
                conditionOfError={isVisibleError}
                classes={styles.short_desc}
                isErrorToShow
                errorMessage="Incorrect short description. It has to be filled"/>
        </div>
    );
};

export default ShortDescriptionSection;