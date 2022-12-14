import * as api from "services/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const response = await api.getContacts();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addContact = createAsyncThunk("contacts/add", async (data, thunkAPI) => {
    try {
        const result = await api.addContact(data);
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const removeContact = createAsyncThunk("contacts/remove", async (id, thunkAPI) => {
    try {
        await api.removeContact(id);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
