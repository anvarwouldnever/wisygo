import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
    language: string = 'en'
}

export const store = new Store();