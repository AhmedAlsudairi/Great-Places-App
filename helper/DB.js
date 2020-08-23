import * as SQLite from 'expo-sqlite';
import { RecyclerViewBackedScrollView } from 'react-native';

const db = SQLite.openDatabase('places.db');

export const init = () =>{

    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, lng REAL NOT NULL, lat REAL NOT NULL)',
            [],
            ()=>{
                resolve();
            },
            (_,err)=>{
                console.log(err);
                reject(err);
            })
        
       
        })
    })

    return promise;
}

export const insertPlace = (title, image, address, lng, lat) =>{

    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('INSERT INTO places (title, image, address, lng, lat) VALUES (?,?,?,?,?)',
            [title, image, address, lng, lat],
            (_,result)=>{
                resolve(result);
            },
            (_,err)=>{
                console.log(err);
                reject(err);
            })
        
       
        })
    })

    return promise;
}

export const fetchPlaces = () =>{

    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM places',
            [],
            (_,result)=>{
                resolve(result);
            },
            (_,err)=>{
                console.log(err);
                reject(err);
            })
        
       
        })
    })

    return promise;
}