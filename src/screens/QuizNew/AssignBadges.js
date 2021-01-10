import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Badges_Ref} from '../DatabaseRefrences';


const user = auth().currentUser;
export default class AssignBadges extends Component{
    constructor(props){
        super(props)
    }
    initializeBadges(){
        const Intialize_Ref = Badges_Ref.push();
        const user = auth().currentUser;
        if(user){

            Intialize_Ref.set({
                uid: user.uid,
                signupBadge: true,
                pickingUpSteam:false,
                somewhereIntheMiddle:false,
                pokerSavvy:false,
                proPoker:false,
                tumseNaHoPayega:false
            }).then(()=>{
                Badges_Ref.once('value')
                .then((snapshot)=>{
                    console.log('Intialized Badges->',snapshot.val());
                })
            })
        }
        
    }
    checkBadges(contextObject,level){
        console.log('DATA from scorecard->',contextObject);
        // if(contextObject.length === 5){
            Badges_Ref
            .orderByChild('uid')
            .equalTo(user.uid)
            .once('value')
            .then(snapshot=>{
                console.log('Original Badges->',snapshot.val());
                const object = snapshot.val();
                for (const key in object) {
                   if(object[key].pickingUpSteam === false && level === 0){
                       console.log('picking Steam is false',contextObject);
                       this.checkPickingSteam(contextObject);

                   }
                   else if(object[key].pokerSavvy=== false && level === 2){
                    console.log('ppokerSavvy is false',contextObject);
                    this.checkPokerSavvy(contextObject);

                    }
                    else if(object[key].somewhereIntheMiddle=== false && level === 1){
                        console.log('somewhereIntheMiddle is false',contextObject);
                        this.somewhereIntheMiddle(contextObject);
    
                        }
                    else if(object[key].proPoker=== false && level === 3){
                            console.log('proPoker is false',contextObject);
                            this.proPoker(contextObject);
        
                            }
                if(object[key].tumseNaHoPayega === false && level === 0){
                                console.log('tumseNaHoPayegis false',contextObject);
                                this.tumseNaHoPayega(contextObject);
            
                                }
                }
            })

        // }
    }
    tumseNaHoPayega(contextObject)
    {
    console.log('tum se na ho payega status',contextObject)
    if(contextObject.noviceScore0 === 5){
        Badges_Ref
        .orderByChild('uid')
        .equalTo(user.uid)
        .once('value', function(snapshot){
            snapshot.forEach(child => {
                child.ref.update({tumseNaHoPayega:true})
            });
        }).then(snapshot=>{
            console.log('Modified->',snapshot.val())
        })
    }

}    somewhereIntheMiddle(contextObject){
        console.log('somewhereIntheMiddle status',contextObject)
        if(contextObject.casualScore5 === 5){
            Badges_Ref
            .orderByChild('uid')
            .equalTo(user.uid)
            .once('value', function(snapshot){
                snapshot.forEach(child => {
                    child.ref.update({somewhereIntheMiddle:true})
                });
            }).then(snapshot=>{
                console.log('Modified->',snapshot.val())
            })
        }
    }
    proPoker(contextObject){
        console.log('somewhereIntheMiddle status',contextObject)
        if(contextObject.legendScore5 === 5){
            Badges_Ref
            .orderByChild('uid')
            .equalTo(user.uid)
            .once('value', function(snapshot){
                snapshot.forEach(child => {
                    child.ref.update({proPoker:true})
                });
            }).then(snapshot=>{
                console.log('Modified->',snapshot.val())
            })
        }
    }
    checkPokerSavvy(contextObject){
        console.log('poker savvy status',contextObject)
        if(contextObject.proScore5 === 5){
            Badges_Ref
            .orderByChild('uid')
            .equalTo(user.uid)
            .once('value', function(snapshot){
                snapshot.forEach(child => {
                    child.ref.update({pokerSavvy:true})
                });
            }).then(snapshot=>{
                console.log('Modified->',snapshot.val())
            })
        }
    }
    checkPickingSteam(contextObject){
        console.log('picking steam sttus',contextObject)
        if(contextObject.noviceScore5 === 5){
            Badges_Ref
            .orderByChild('uid')
            .equalTo(user.uid)
            .once('value', function(snapshot){
                snapshot.forEach(child => {
                    child.ref.update({pickingUpSteam:true})
                });
            }).then(snapshot=>{
                console.log('Modified->',snapshot.val())
            })
        }
    }
}