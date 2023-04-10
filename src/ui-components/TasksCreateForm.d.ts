/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TasksCreateFormInputValues = {
    task?: string;
};
export declare type TasksCreateFormValidationValues = {
    task?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasksCreateFormOverridesProps = {
    TasksCreateFormGrid?: FormProps<GridProps>;
    task?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TasksCreateFormProps = React.PropsWithChildren<{
    overrides?: TasksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onSuccess?: (fields: TasksCreateFormInputValues) => void;
    onError?: (fields: TasksCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onValidate?: TasksCreateFormValidationValues;
} & React.CSSProperties>;
export default function TasksCreateForm(props: TasksCreateFormProps): React.ReactElement;
