/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Tasks } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TasksUpdateFormInputValues = {
    task?: string;
};
export declare type TasksUpdateFormValidationValues = {
    task?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasksUpdateFormOverridesProps = {
    TasksUpdateFormGrid?: FormProps<GridProps>;
    task?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TasksUpdateFormProps = React.PropsWithChildren<{
    overrides?: TasksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tasks?: Tasks;
    onSubmit?: (fields: TasksUpdateFormInputValues) => TasksUpdateFormInputValues;
    onSuccess?: (fields: TasksUpdateFormInputValues) => void;
    onError?: (fields: TasksUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TasksUpdateFormInputValues) => TasksUpdateFormInputValues;
    onValidate?: TasksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TasksUpdateForm(props: TasksUpdateFormProps): React.ReactElement;
