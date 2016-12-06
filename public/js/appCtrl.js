angular.module('app')
    .controller('appCtrl', function($scope, $interval, NgMap, $sce) {

        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAg8OKbxsSoWv2O8sPFQckcVtdeSc7gRtI";

        $scope.open = false;

        $scope.openNav = () => {
          document.getElementById('drop-down-container').style.display = 'flex';
          $scope.open = true;
        }
        $scope.closeNav = () => {
          document.getElementById('drop-down-container').style.display = 'none';
          $scope.open = false;
        }

        NgMap.getMap().then(function(map) {
          
        });

        $scope.xmasCountDown = () => {
          let xmas = new Date("December 25, 2016 00:01:00");
          let now = new Date();
          let timeDiff = xmas.getTime() - now.getTime();
          let seconds = Math.floor(timeDiff / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          let days = Math.floor(hours / 24);
          hours %= 24;
          minutes %= 60;
          seconds %= 60;
          if (timeDiff <= 0) {
            clearTimeout(timer);
            return "Christmas is here!";
          }
          else {
            return days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
          }
        }
        const timer = $interval($scope.xmasCountDown, 1000);

        $scope.lightsCountDown = () => {
          let lights = new Date("December 01, 2016 00:01:00");
          let now = new Date();
          let timeDiff = lights.getTime() - now.getTime();
          let seconds = Math.floor(timeDiff / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          let days = Math.floor(hours / 24);
          hours %= 24;
          minutes %= 60;
          seconds %= 60;
          if (timeDiff <= 0) {
            clearTimeout(timer2);
            return "The lights are on!";
          }
          else {
            return days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
          }
        }
        const timer2 = $interval($scope.lightsCountDown, 1000);

        $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/TuCpnnOAfv0?list=PLsSA51Il-BJLZQIemI5qmAQcW4K48ilMv");

  });
