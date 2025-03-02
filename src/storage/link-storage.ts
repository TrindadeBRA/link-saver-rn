import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function getLinks(): Promise<LinkStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);
        const response = storage ? JSON.parse(storage) : [];
        
        return response
    } catch (error) {
        throw error;
    }
}

async function saveLink(link: LinkStorage) {
    try {
        const storage = await getLinks();
        const updatedStorage = [...storage, link];
        
        await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updatedStorage));
        
        return updatedStorage
    } catch (error) {
        throw error;
    }
}

async function deleteLink(id: string) {
    try {
        const storage = await getLinks();
        const updatedStorage = storage.filter((link) => link.id !== id);
        await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updatedStorage));
    } catch (error) {
        throw error;
    }
}

export const linkStorage = {
    getLinks,
    saveLink,
    deleteLink
}

