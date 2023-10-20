"use client";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    toggle: true,
    submenuToggle: false,
    positionTop: 0,
    EmploymentHoldingDisplay: false,
    ProvinceState: false,
    changeColorState: false,
    windowInnerWidth:0
  },
  reducers: {
    changeToggleState(state, action) {
      state.toggle = action.payload;
    },
    toggleStateForSubmenu(state, action) {
      state.submenuToggle = action.payload;
    },
    changePositionTop(state, action) {
      state.positionTop = action.payload;
    },
    displayEmploymentHoldingPopUp(state, action) {
      state.EmploymentHoldingDisplay = action.payload;
    },
    displayProvince(state, action) {
      state.ProvinceState = action.payload;
    },
    changeContactUsPageColor(state, action) {
      state.changeColorState = action.payload;
    },
    getWindowInnerWidth(state,action){
      state.windowInnerWidth = action.payload
    }
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
