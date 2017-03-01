var policeApp = angular.module('policeApp', ['ngMaterial', 'ngMessages', 'ui.bootstrap']);

policeApp.controller('formController', function ($scope, $http) {

    $scope.citizenships = [
        { id: 0, name: "-" },
        { id: 1, name: "Eesti Vabariik" },
        { id: 2, name: "Afganistan" },
        { id: 3, name: "Ahvenamaa" },
        { id: 4, name: "Albaania" },
        { id: 5, name: "Alžeeria" },
        { id: 6, name: "Ameerika Samoa" },
        { id: 7, name: "Ameerika Ühendriigid" },
        { id: 8, name: "Andorra" },
        { id: 9, name: "Angola" },
        { id: 10, name: "Anguilla" },
        { id: 11, name: "Antarktis" },
        { id: 12, name: "Antigua ja Barbuda" },
        { id: 13, name: "Aomen" },
        { id: 14, name: "Araabia Ühendemiraadid" },
        { id: 15, name: "Argentina" },
        { id: 16, name: "Armeenia" },
        { id: 17, name: "Aruba" },
        { id: 18, name: "Aserbaidžaan" },
        { id: 19, name: "Austraalia" },
        { id: 20, name: "Austria" },
        { id: 21, name: "Bahama" },
        { id: 22, name: "Bahrein" },
        { id: 23, name: "Bangladesh" },
        { id: 24, name: "Barbados" },
        { id: 25, name: "Belau" },
        { id: 26, name: "Belgia" },
        { id: 27, name: "Belize" },
        { id: 28, name: "Benin" },
        { id: 29, name: "Bermuda" },
        { id: 30, name: "Bhutan" },
        { id: 31, name: "Boliivia Paljurahvuseline Riik" },
        { id: 32, name: "Bonaire, Sint Eustatius ja Saba" },
        { id: 33, name: "Bosnia- ja Hertsegoviina" },
        { id: 34, name: "Botswana" },
        { id: 35, name: "Bouvet' saar" },
        { id: 36, name: "Brasiilia" },
        { id: 37, name: "Briti India ookeani ala" },
        { id: 38, name: "Briti Neitsisaared" },
        { id: 39, name: "Brunei Darussalam" },
        { id: 40, name: "Bulgaaria" },
        { id: 41, name: "Burkina Faso" },
        { id: 42, name: "Burundi" },
        { id: 43, name: "Colombia" },
        { id: 44, name: "Cooki saared" },
        { id: 45, name: "Costa Rica" },
        { id: 46, name: "Cura?ao" },
        { id: 47, name: "Cura?ao (Holl)" },
        { id: 48, name: "Djibouti" },
        { id: 49, name: "Dominica" },
        { id: 50, name: "Dominikaani Vabariik" },
        { id: 51, name: "Ecuador" },
        { id: 52, name: "Egiptus" },
        { id: 53, name: "Ekvatoriaal-Guinea" },
        { id: 54, name: "El Salvador" },
        { id: 55, name: "Elevandiluurannik" },
        { id: 56, name: "Eritrea Riik" },
        { id: 57, name: "Etioopia" },
        { id: 58, name: "Falklandi (Malviini) saared" },
        { id: 59, name: "Fidži" },
        { id: 60, name: "Filipiini Vabariik" },
        { id: 61, name: "Fääri saared" },
        { id: 62, name: "Gabon" },
        { id: 63, name: "Gambia" },
        { id: 64, name: "Ghana" },
        { id: 65, name: "Gibraltar" },
        { id: 66, name: "Grenada" },
        { id: 67, name: "Gruusia" },
        { id: 68, name: "Gröönimaa" },
        { id: 69, name: "Guadeloupe" },
        { id: 70, name: "Guam" },
        { id: 71, name: "Guatemala" },
        { id: 72, name: "Guernsey" },
        { id: 73, name: "Guernsey (GBR)" },
        { id: 74, name: "Guinea" },
        { id: 75, name: "Guinea-Bissau" },
        { id: 76, name: "Guyana" },
        { id: 77, name: "Haiti" },
        { id: 78, name: "Heard ja McDonald" },
        { id: 79, name: "Hiina" },
        { id: 80, name: "Hispaania" },
        { id: 81, name: "Holland" },
        { id: 82, name: "Hollandi Antillid" },
        { id: 83, name: "Honduras" },
        { id: 84, name: "Hongkong" },
        { id: 85, name: "Horvaatia" },
        { id: 86, name: "Ida-Timori" },
        { id: 87, name: "Ida-Timori" },
        { id: 88, name: "Iirimaa" },
        { id: 89, name: "Iisrael" },
        { id: 90, name: "ilma kodakondsuseta" },
        { id: 91, name: "India" },
        { id: 92, name: "Indoneesia" },
        { id: 93, name: "Iraak" },
        { id: 94, name: "Iraan" },
        { id: 95, name: "Island" },
        { id: 96, name: "Itaalia" },
        { id: 97, name: "Jaapan" },
        { id: 98, name: "Jamaica" },
        { id: 99, name: "Jeemen" },
        { id: 100, name: "Jersey" },
        { id: 101, name: "JEY" },
        { id: 102, name: "Jordaania" },
        { id: 103, name: "Jugoslaavia" },
        { id: 104, name: "Jõulusaar" },
        { id: 105, name: "Kaimanisaared (GBR)" },
        { id: 106, name: "Kambodža" },
        { id: 107, name: "Kamerun" },
        { id: 108, name: "Kanada" },
        { id: 109, name: "Kasahstan" },
        { id: 110, name: "Katar" },
        { id: 111, name: "Kenya" },
        { id: 112, name: "Kesk-Aafrika Vabariik" },
        { id: 113, name: "Kiribati" },
        { id: 114, name: "Komoori Liit" },
        { id: 115, name: "Kongo" },
        { id: 116, name: "Kongo DV" },
        { id: 117, name: "Kookossaared (Keelingi saared)" },
        { id: 118, name: "Korea RDV" },
        { id: 119, name: "Korea Vabariik" },
        { id: 120, name: "Kosovo" },
        { id: 121, name: "Kreeka" },
        { id: 122, name: "Kuuba" },
        { id: 123, name: "Kuveit" },
        { id: 124, name: "Kõrgõzstan" },
        { id: 125, name: "Küpros" },
        { id: 126, name: "Laos" },
        { id: 127, name: "Leedu" },
        { id: 128, name: "Lesotho" },
        { id: 129, name: "Libeeria" },
        { id: 130, name: "Liechtenstein" },
        { id: 131, name: "Liibanon" },
        { id: 132, name: "Liibüa" },
        { id: 133, name: "Luksemburg" },
        { id: 134, name: "Lõuna-Aafrika Vabariik" },
        { id: 135, name: "Lõuna-Georgia ja Lõuna-Sandwich" },
        { id: 136, name: "Lõuna-Sudaan" },
        { id: 137, name: "Läti Vabariik" },
        { id: 138, name: "Lääne-Sahara" },
        { id: 139, name: "Madagaskar" },
        { id: 140, name: "Makedoonia" },
        { id: 141, name: "Malaisia" },
        { id: 142, name: "Malawi" },
        { id: 143, name: "Maldiivid" },
        { id: 144, name: "Mali" },
        { id: 145, name: "Malta" },
        { id: 146, name: "Mani saar" },
        { id: 147, name: "Maroko" },
        { id: 148, name: "Marshalli Saared" },
        { id: 149, name: "Martinique" },
        { id: 150, name: "Mauritaania" },
        { id: 151, name: "Mauritius" },
        { id: 152, name: "Mayotte" },
        { id: 153, name: "Mehhiko" },
        { id: 154, name: "Mikroneesia" },
        { id: 155, name: "Moldova" },
        { id: 156, name: "Monaco" },
        { id: 157, name: "Mongoolia" },
        { id: 158, name: "Montenegro" },
        { id: 159, name: "Montserrat" },
        { id: 160, name: "Mosambiik" },
        { id: 161, name: "Myanmar" },
        { id: 162, name: "Namiibia" },
        { id: 163, name: "Nauru" },
        { id: 164, name: "Nepal" },
        { id: 165, name: "Nicaragua" },
        { id: 166, name: "Nigeeria" },
        { id: 167, name: "Niger" },
        { id: 168, name: "Niue" },
        { id: 169, name: "Norfolki Saar" },
        { id: 170, name: "Norra" },
        { id: 171, name: "Omaan" },
        { id: 172, name: "Paapua Uus-Guinea" },
        { id: 173, name: "Pakistan" },
        { id: 174, name: "Palestiina okupeeritud alad" },
        { id: 175, name: "Panama" },
        { id: 176, name: "Paraguay" },
        { id: 177, name: "Peruu" },
        { id: 178, name: "Pitcairn" },
        { id: 179, name: "Poola" },
        { id: 180, name: "Portugali" },
        { id: 181, name: "Prantsuse Guajaana" },
        { id: 182, name: "Prantsuse Lõunaalad" },
        { id: 183, name: "Prantsuse Polüneesia" },
        { id: 184, name: "Prantsusmaa" },
        { id: 185, name: "Puerto Rico" },
        { id: 186, name: "Põhja-Mariaanid" },
        { id: 187, name: "Püha Tool (Vatikan)" },
        { id: 188, name: "Réunion" },
        { id: 189, name: "Riik teadmata" },
        { id: 190, name: "Roheneemesaared" },
        { id: 191, name: "Rootsi Kuningriik" },
        { id: 192, name: "Rumeenia" },
        { id: 193, name: "Rwanda" },
        { id: 194, name: "Saalomoni Saared" },
        { id: 195, name: "Saint Helena, Ascension ja Tristan da Cunha (GBR)" },
        { id: 196, name: "Saint Kitts ja Nevis" },
        { id: 197, name: "Saint Lucia" },
        { id: 198, name: "Saint Pierre ja Miquelon" },
        { id: 199, name: "Saint Vincent ja Grenadiinid" },
        { id: 200, name: "Saint-Barthélemy (FRA)" },
        { id: 201, name: "Saint-Martin (Prantsuse osa) (FRA)" },
        { id: 202, name: "Saksamaa" },
        { id: 203, name: "Sambia" },
        { id: 204, name: "Samoa" },
        { id: 205, name: "San Marino" },
        { id: 206, name: "Sao Tomé ja Principe" },
        { id: 207, name: "Saudi Araabia" },
        { id: 208, name: "Seišellid" },
        { id: 209, name: "Senegal" },
        { id: 210, name: "Serbia" },
        { id: 211, name: "Sierra Leone" },
        { id: 212, name: "Singapur" },
        { id: 213, name: "Sint Marteen (Hollandi osa)" },
        { id: 214, name: "Slovakkia" },
        { id: 215, name: "Sloveenia" },
        { id: 216, name: "Somaali Vabariik" },
        { id: 217, name: "Soome" },
        { id: 218, name: "Sri Lanka" },
        { id: 219, name: "Sudaan" },
        { id: 220, name: "Suriname" },
        { id: 221, name: "Suurbritannia" },
        { id: 222, name: "Svaasimaa" },
        { id: 223, name: "Svalbard ja Jan Mayen" },
        { id: 224, name: "Süüria" },
        { id: 225, name: "Šveits" },
        { id: 226, name: "Zimbabwe" },
        { id: 227, name: "Taani" },
        { id: 228, name: "Tadžikistan" },
        { id: 229, name: "Tai" },
        { id: 230, name: "Taiwan" },
        { id: 231, name: "Tansaania" },
        { id: 232, name: "Togo" },
        { id: 233, name: "Tokelau" },
        { id: 234, name: "Tonga" },
        { id: 235, name: "Trinidad ja Tobago" },
        { id: 236, name: "Tšaad" },
        { id: 237, name: "Tšehhi" },
        { id: 238, name: "Tšiili" },
        { id: 239, name: "Tuneesia" },
        { id: 240, name: "Turks ja Caicos" },
        { id: 241, name: "Tuvalu" },
        { id: 242, name: "Türgi" },
        { id: 243, name: "Türkmenistan" },
        { id: 244, name: "Uganda" },
        { id: 245, name: "Ukraina" },
        { id: 246, name: "Ungari" },
        { id: 247, name: "Uruguay" },
        { id: 248, name: "USA Neitsisaared" },
        { id: 249, name: "Usbekistan" },
        { id: 250, name: "Uus-Kaledoonia" },
        { id: 251, name: "Uus-Meremaa" },
        { id: 252, name: "Valgevene" },
        { id: 253, name: "Wallis ja Futuna" },
        { id: 254, name: "Vanuatu" },
        { id: 255, name: "Venemaa Föderatsioon" },
        { id: 256, name: "Venezuela" },
        { id: 257, name: "Vietnam" },
        { id: 258, name: "Ühendriikide hajasaared" },
        { id: 259, name: "Mujal nimetamata territooriumid" },
        { id: 260, name: "Määratlemata" }
    ];

    $scope.counties = [
        { id: 0, name: "-" },
        { id: 1, name: "Harju maakond" },
        { id: 2, name: "Hiiu maakond" },
        { id: 3, name: "Ida-Viru maakond" },
        { id: 4, name: "Jõgeva maakond" },
        { id: 5, name: "Järva maakond" },
        { id: 6, name: "Lääne maakond" },
        { id: 7, name: "Lääne-Viru maakond" },
        { id: 8, name: "Põlva maakond" },
        { id: 9, name: "Pärnu maakond" },
        { id: 10, name: "Rapla maakond" },
        { id: 11, name: "Saare maakond" },
        { id: 12, name: "Tartu maakond" },
        { id: 13, name: "Valga maakond" },
        { id: 14, name: "Viljandi maakond" },
        { id: 15, name: "Võru maakond" }
    ];

    $scope.contact_manners = [
        { id: 0, name: "e-kirja teel" },
        { id: 1, name: "telefoni teel" }
    ];

    $scope.police_areas = [
        { id: 0, name: "Üldine kontakt" },
        { id: 1, name: "Põhja Prefektuur" },
        { id: 2, name: "Lõuna Prefektuur" },
        { id: 3, name: "Ida Prefektuur" },
        { id: 4, name: "Lääne Prefektuur" }
    ];

    $scope.radioCurrent = 0;

    $scope.selectRadio = function (value) {
        $scope.radioCurrent = value;
    };

    $scope.isSelected = function (value) {
        return $scope.radioCurrent == value;
    }

    $scope.items = [];
    $scope.perpetrators = [];

    $scope.firstName = 'Kristo';
    $scope.lastName = 'Palo';
    $scope.idCode = '39312245336';
    $scope.dateOfBirth = new Date('1993-12-23T22:00:00.000Z');
    $scope.occupation = 'Ehitaja';
    $scope.citizenship = 1;
    $scope.address = 'Tallinn';
    $scope.postcode = '123456';
    $scope.county = 1;
    $scope.contact_manner = 1;
    $scope.contact_time = 'Igal ajal';
    $scope.email = 'kristopalo@hotmail.com';
    $scope.phone = '5519567';
    $scope.person_is_jur = true;
    $scope.dateOfIncident = new Date('2017-01-08T23:00:00.000Z');
    $scope.timeOfIncident = new Date('2017-01-08T23:00:00.000Z');
    $scope.police_area = 0;
    $scope.country = 1;
    $scope.incidentAddress = 'Vabaduse pst 123';
    $scope.place = 'kortermaja';
    $scope.desc = 'Minu rahakott varastati ära';
    $scope.damage = 35;
    $scope.items.push({ 
    'id': 'item1', 
    'output_id': 1, 
    'name': 'Sülearvuti ASUS', 
    'year': 2011,
    'value': 350,
    'timeLastThere':  new Date('2017-01-06T23:00:00.000Z'),
    'dateLastThere': new Date('2017-01-06T23:00:00.000Z'),
    'timeWentMissing': new Date('2017-01-09T23:00:00.000Z'),
    'dateWentMissing': new Date('2017-01-09T23:00:00.000Z'),
    'wasInALockedRoom': true,
    'identification': 'Musta värvi. Seeria number: XX-455-34342-K56C'
});

    $scope.submit = function () {
        console.log('submit form');
    }



    $scope.addNewItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push({ 'id': 'item' + newItemNo, 'output_id': newItemNo });
    }



    $scope.addNewPerp = function () {
        var newPerpNo = $scope.perpetrators.length + 1;
        $scope.perpetrators.push({ 'id': 'item' + newPerpNo, 'output_id': newPerpNo });
    }

});


