describe("App.Views.NotesFilter", function () {
	var displayCollection = {
		filterBy: sinon.spy(),
		showAll: sinon.spy()
	};

	before(function() {
		var fixture = "<form class='navbar-search'><input class='search-query' /></form>";
		$('#fixtures').html(fixture);
	});
	after(function() {
		$('#fixtures').empty();
	});

	it('should call filterBy when text changes in the input field', function() {
		var view = new App.Views.NotesFilter({collection: displayCollection});

		$('.search-query').val('foo');
		$('.search-query').trigger('input');

		expect(displayCollection.filterBy).to.have.been.calledWith('foo');
	});
});

