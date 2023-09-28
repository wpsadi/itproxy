l = `
      Ansh  Kumar  Jha,131230033187,https://drive.google.com/open?id=1i6vqExOmUkchCffp-Z-ihOT37ozDT0jr
      Aritra  shaw,131230030597,https://drive.google.com/open?id=1QBzdKVrgui8xZEoh-S27bLc7q-GNrNg9
      Kartik  Kaparwan ,131230018487,https://drive.google.com/open?id=1TRU0dF-brJtueN2R4HJcMbxnV3QZbwlg
      PRIYANSHU   KALONDIA,131230021919,https://drive.google.com/open?id=1PBt5y49PL1GLGfbq3vDe4qldQ4Xl_dsC
      Akshit Maheshwari ,131230021751,https://drive.google.com/open?id=1iGiVVHEhFJvCtOfvxmuWxLAz2dcLyzJY
      NIKHIL RAI,131230010854,https://drive.google.com/open?id=1Od17XQluFh6c1uax3Y2aAYfqkCsm_lXd
      Aditya                  Goel , 131230000648, https://google.com
   `

function createOption(value_data){
   datalist = document.getElementById("search")

   option = document.createElement("option")
   option.value = value_data

   datalist.append(option)
}

createOption.destroy = function(){
   datalist = document.getElementById("search")
   x = datalist.getElementsByTagName("option")
   // console.log(x.length)
   for (let i of x){
      datalist.remove(i)
   }
}

function capitalize(string){
   let str = string

   str = str.split(" ")  // ["aNnsh" , "" , "k" , "jha"]

   let x = new Array()  // x = []
   for (let i of str){
      if (i.length > 0){
         i = i.toLowerCase() // ansh
         i = i[0].toUpperCase() + i.slice(1,i.length) // Ansh
         x.push(i) // x ["Ansh"]
      }
   }

   // x = ["Ansh" , "K", "Jha"]

   return x.join(" ") // string.join(" ") => `Ansh K Jha`
}


function listToHTML(list){
   list = listLookUpChanger(list)

   try{
      createOption.destroy()
   }
   catch (error){
      null
   }

   for (let i of list){
      i = i.split(",")
      i = i[0]
      i = i.trim()
      createOption(capitalize(i))
   }
}

function listLookUpChanger(list){
   list = list.trim()
   list = list.split("\n")

   return list
}


listToHTML(l)
