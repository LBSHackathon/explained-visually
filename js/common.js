

var utils = {
  setFBIframeLink: function($scope, $sce, $window) {
    $scope.fbIframeLink = $sce.trustAsResourceUrl(
      '//www.facebook.com/plugins/share_button.php?href='
      + encodeURIComponent($window.location.href)
      + '&width&layout=button_count')
  }
}