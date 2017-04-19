/**
 * Created by nenroz on 22/03/17.
 */

app.controller('commandesCtrl', function ($scope, $http) {

  $scope.isCollapsed = false;

  $scope.commandes = {
    1: {
      "Acheteur": {
        "Civilite": "Mademoiselle",
        "Nom": "Vallie",
        "Prenom": "Elvis",
        "Age": 18,
        "Email": "vallie.elvis@e-corp.com"
      },
      "Infos_commande": {
        "Jour": "2017-02-20",
        "Horaire_livraison": "08:00",
        "Paiement_espece": "Non"
      },
      "Details_commande": [
        {
          "Commande1": {
            "Repas": "Les trois petits cochons",
            "Civilite": "Mademoiselle",
            "Nom": "Vallie",
            "Prenom": "Elvis",
            "Age": 18,
            "Tarif": "Etudiant"
          }
        },
        {
          "Commande2": {
            "Repas": "Flageollet fatal",
            "Civilite": "Monsieur",
            "Nom": "Roscoe",
            "Prenom": "Edwardo",
            "Age": 14,
            "Tarif": "Etudiant"
          }
        },
        {
          "Commande3": {
            "Repas": "Fruits défendus",
            "Civilite": "Mademoiselle",
            "Nom": "Federico",
            "Prenom": "Leora",
            "Age": 60,
            "Tarif": "Senior"
          }
        }
      ]
    },
    2: {
      "Acheteur": {
        "Civilite": "Mademoiselle",
        "Nom": "Vallie",
        "Prenom": "Elvis",
        "Age": 18,
        "Email": "vallie.elvis@e-corp.com"
      },
      "Infos_commande": {
        "Jour": "2017-02-20",
        "Horaire_livraison": "08:00",
        "Paiement_espece": "Non"
      },
      "Details_commande": [
        {
          "Commande1": {
            "Repas": "Les trois petits cochons",
            "Civilite": "Mademoiselle",
            "Nom": "Vallie",
            "Prenom": "Elvis",
            "Age": 18,
            "Tarif": "Etudiant"
          }
        },
        {
          "Commande2": {
            "Repas": "Flageollet fatal",
            "Civilite": "Monsieur",
            "Nom": "Roscoe",
            "Prenom": "Edwardo",
            "Age": 14,
            "Tarif": "Etudiant"
          }
        },
        {
          "Commande3": {
            "Repas": "Fruits défendus",
            "Civilite": "Mademoiselle",
            "Nom": "Federico",
            "Prenom": "Leora",
            "Age": 60,
            "Tarif": "Senior"
          }
        }
      ]
    },
		3: {
			"Acheteur": {
				"Civilite": "Mademoiselle",
				"Nom": "Vallie",
				"Prenom": "Elvis",
				"Age": 18,
				"Email": "vallie.elvis@e-corp.com"
			},
			"Infos_commande": {
				"Jour": "2017-02-20",
				"Horaire_livraison": "08:00",
				"Paiement_espece": "Non"
			},
			"Details_commande": [
				{
					"Commande1": {
						"Repas": "Les trois petits cochons",
						"Civilite": "Mademoiselle",
						"Nom": "Vallie",
						"Prenom": "Elvis",
						"Age": 18,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande2": {
						"Repas": "Flageollet fatal",
						"Civilite": "Monsieur",
						"Nom": "Roscoe",
						"Prenom": "Edwardo",
						"Age": 14,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande3": {
						"Repas": "Fruits défendus",
						"Civilite": "Mademoiselle",
						"Nom": "Federico",
						"Prenom": "Leora",
						"Age": 60,
						"Tarif": "Senior"
					}
				}
			]
		},
		4: {
			"Acheteur": {
				"Civilite": "Mademoiselle",
				"Nom": "Vallie",
				"Prenom": "Elvis",
				"Age": 18,
				"Email": "vallie.elvis@e-corp.com"
			},
			"Infos_commande": {
				"Jour": "2017-02-20",
				"Horaire_livraison": "08:00",
				"Paiement_espece": "Non"
			},
			"Details_commande": [
				{
					"Commande1": {
						"Repas": "Les trois petits cochons",
						"Civilite": "Mademoiselle",
						"Nom": "Vallie",
						"Prenom": "Elvis",
						"Age": 18,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande2": {
						"Repas": "Flageollet fatal",
						"Civilite": "Monsieur",
						"Nom": "Roscoe",
						"Prenom": "Edwardo",
						"Age": 14,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande3": {
						"Repas": "Fruits défendus",
						"Civilite": "Mademoiselle",
						"Nom": "Federico",
						"Prenom": "Leora",
						"Age": 60,
						"Tarif": "Senior"
					}
				}
			]
		},
		5: {
			"Acheteur": {
				"Civilite": "Mademoiselle",
				"Nom": "Vallie",
				"Prenom": "Elvis",
				"Age": 18,
				"Email": "vallie.elvis@e-corp.com"
			},
			"Infos_commande": {
				"Jour": "2017-02-20",
				"Horaire_livraison": "08:00",
				"Paiement_espece": "Non"
			},
			"Details_commande": [
				{
					"Commande1": {
						"Repas": "Les trois petits cochons",
						"Civilite": "Mademoiselle",
						"Nom": "Vallie",
						"Prenom": "Elvis",
						"Age": 18,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande2": {
						"Repas": "Flageollet fatal",
						"Civilite": "Monsieur",
						"Nom": "Roscoe",
						"Prenom": "Edwardo",
						"Age": 14,
						"Tarif": "Etudiant"
					}
				},
				{
					"Commande3": {
						"Repas": "Fruits défendus",
						"Civilite": "Mademoiselle",
						"Nom": "Federico",
						"Prenom": "Leora",
						"Age": 60,
						"Tarif": "Senior"
					}
				}
			]
		}
  };

	$scope.nbCommandes = $scope.commandes.length;

});

app.controller('detailCommandeCtrl', function ($scope, $route, $routeParams) {

	$scope.commandeId = $routeParams.id;

	// TODO Get sur service commande/:id

	$scope.commande = {
		"Acheteur": {
			"Civilite": "Mademoiselle",
			"Nom": "Vallie",
			"Prenom": "Elvis",
			"Age": 18,
			"Email": "vallie.elvis@e-corp.com"
		},
		"Infos_commande": {
			"Jour": "2017-02-20",
			"Horaire_livraison": "08:00",
			"Paiement_espece": "Non"
		},
		"Details_commande": [
			{
				"Commande1": {
					"Repas": "Les trois petits cochons",
					"Civilite": "Mademoiselle",
					"Nom": "Vallie",
					"Prenom": "Elvis",
					"Age": 18,
					"Tarif": "Etudiant"
				}
			},
			{
				"Commande2": {
					"Repas": "Flageollet fatal",
					"Civilite": "Monsieur",
					"Nom": "Roscoe",
					"Prenom": "Edwardo",
					"Age": 14,
					"Tarif": "Etudiant"
				}
			},
			{
				"Commande3": {
					"Repas": "Fruits défendus",
					"Civilite": "Mademoiselle",
					"Nom": "Federico",
					"Prenom": "Leora",
					"Age": 60,
					"Tarif": "Senior"
				}
			}
		]
	};

});

app.controller('statsCtrl', function ($scope) {

  $scope.data = [
    { y: "2006", a: 100 },
    { y: "2007", a: 75 },
    { y: "2008", a: 50 },
    { y: "2009", a: 75 },
    { y: "2010", a: 50 },
    { y: "2011", a: 75 },
    { y: "2012", a: 100 }
  ];
  $scope.xaxis = 'y';
  $scope.yaxis = '["a"]';

});
