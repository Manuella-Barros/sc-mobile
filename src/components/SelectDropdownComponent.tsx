import React, {useContext} from 'react';
import {ICategories} from "../interfaces/interfaces";
import SelectDropdown from "react-native-select-dropdown";
import {GlobalContext} from "../context/GlobalContext";

interface ISelectDropdown {
    setSelectedItemID:  React.Dispatch<React.SetStateAction<number | null>>
}

function SelectDropdownComponent({setSelectedItemID}: ISelectDropdown) {
    const {categories} = useContext(GlobalContext);

    if(categories == null)
        return null

    return (
        <SelectDropdown
            data={categories}

            onSelect={(selectedItem: ICategories) => {
                setSelectedItemID(selectedItem.id)
            }}

            buttonTextAfterSelection={(selectedItem: ICategories) => {
                return selectedItem.name
            }}

            rowTextForSelection={(item: ICategories) => {
                return item.name
            }}

            defaultButtonText={"Categoria"}
            buttonStyle={{
                width: "45%",
                borderRadius: 10
            }}
            dropdownStyle={{
                borderRadius: 10,
            }}
            rowTextStyle={{
                fontSize: 14
            }}
        />
    );
}

export default SelectDropdownComponent;