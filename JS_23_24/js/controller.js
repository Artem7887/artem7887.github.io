define(
    'controller',
    ['jquery'],
        function() {

            return function Controller(model, view) {
                var self = this;

                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.item-delete', removeItem);
                view.elements.listContainer.on('click','.list-item',chooseItem);
                view.elements.changeBtn.on('click',changeItem);

                function addItem() {
                    var newItem = view.elements.input.val();
                    model.addItem(newItem);
                    $('.item-confirm').css('color', 'grey');
                    view.renderList(model.data);
                    view.elements.input.val('');
                }

                function removeItem() {
                    var item = $(this).attr('data-value');
                    model.removeItem(item);
                    $('.item-confirm').css('color', 'grey');
                    view.renderList(model.data);
                }

                function chooseItem() {
                    var index = $(this).attr('data-index');
                    model.indexOfActive = index;
                    $('.item-confirm').css('color', '#00ff6c');
                    view.renderChoosenItem(model.indexOfActive);
                    view.renderInputItem(model.data,model.indexOfActive);  
                }

                function changeItem(index) {
                    var changedItem = view.elements.input.val();
                    model.changeItem(changedItem);
                    $('.item-confirm').css('color', '#212121');
                    view.renderList(model.data);
                    view.elements.input.val('');
                }                   
            };
        }
);
