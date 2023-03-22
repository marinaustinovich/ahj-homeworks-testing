export default class CheckForm {
  static get markupForm() {
    return `
        <form id="form" novalidate="novalidate" class="form-inline">
            <div class="form-group">
                <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
                <a id="submitform" class="btn">Click to Validate</a>
                <a id="resetform" class="btn">Reset form</a>
            </div>
        </form>
        
        `;
  }
}
