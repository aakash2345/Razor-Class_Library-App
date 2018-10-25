/** 
 * Copyright 2018 Telerik EAD                                                                                                                                                                           
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["ar-TN"] = {
        name: "ar-TN",
        numberFormat: {
            pattern: ["-n"],
            decimals: 3,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 3,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Tunisian Dinar",
                abbr: "TND",
                pattern: ["-n $","n $"],
                decimals: 3,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "د.ت.‏"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
                    namesAbbr: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
                    namesShort: ["ح","ن","ث","ر","خ","ج","س"]
                },
                months: {
                    names: ["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
                    namesAbbr: ["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]
                },
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    F: "dd MMMM, yyyy H:mm:ss",
                    g: "dd-MM-yyyy H:mm",
                    G: "dd-MM-yyyy H:mm:ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));