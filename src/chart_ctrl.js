import {PanelCtrl} from 'app/plugins/sdk';
import c3 from 'c3';

export class ChartCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    this.updateClock();
  }

  updateClock() {
    //this.time = moment().format('hh:mm:ss');
    //this.$timeout(() => { this.updateClock(); }, 1000);
	consoe.log('teste');
  }
}

ClockCtrl.templateUrl = 'module.html';