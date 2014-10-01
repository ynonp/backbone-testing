describe("App.Collections.Notes", function () {
	var notes = [
		{ title: "just a test", id: 1 },
		{ title: "another note", id: 2 },
		{ title: "just another note", id: 3 }
	];

	it('should filter notes for display', function() {
		var col = new App.Collections.Notes(notes);
		col.filterBy('just');

		expect(col).to.have.length(notes.length);
		expect(col.forDisplay).to.have.length(2);
		expect(col.forDisplay.get(1)).to.be.ok;
		expect(col.forDisplay.get(3)).to.be.ok;
		expect(col.forDisplay.get(2)).to.not.be.ok;
	});

	it('should reset filters when asked', function() {
		var col = new App.Collections.Notes(notes);
		col.filterBy('just');
		col.showAll();

		expect(col.forDisplay).to.have.length(notes.length);
		expect(col).to.have.length(notes.length);

	});
});
