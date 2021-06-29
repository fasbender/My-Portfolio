import { action, observable, makeObservable } from "mobx";
import { RootStore } from "./rootStore";

export default class CommonStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this);
    }

    @observable showProfile = true;
    @observable showEducation = false;
    @observable showExperience = false;

    @action visibleProfile = () => {
        this.showProfile = true;
        this.showEducation = false;
        this.showExperience = false;
    }
    @action visibleEducation = () => {
        this.showProfile = false;
        this.showEducation = true;
        this.showExperience = false;
    }
    @action visibleExperience = () => {
        this.showProfile = false;
        this.showEducation = false;
        this.showExperience = true;
    }
}