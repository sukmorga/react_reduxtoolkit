import { RootState } from './../store/store';
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "../store/store";
import { useSelector } from 'react-redux';



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
