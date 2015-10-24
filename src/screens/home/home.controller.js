class HomeController {
  constructor($timeout, prettyTime) {
    'ngInject';

    this.$timeout = $timeout;
    this.prettyTime = prettyTime;

    this.greetingName = 'Anzor';
    this.timeString = this.prettyTime.getTime();

    this.updateTime($timeout);
  }

  updateTime() {
    var u = function() {
      this.timeString = this.prettyTime.getTime();
      this.updateTime();
    };

    this.$timeout(_.bind(u, this), 1000);
  }
}

export default HomeController;
