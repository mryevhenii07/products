import { RootState } from '../store';

export const selectForm = (state: RootState) => state.createForm.formList;
