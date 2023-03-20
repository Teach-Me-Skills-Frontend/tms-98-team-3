const searchInputName = ('search-input');

export class SearchForm {
    constructor (onProductsSearch) {
        this.searchForm = document.getElementById('search__id');
        this. onProductsSearch = onProductsSearch;
        this.searchForm.addEventListener ('submit', this.onSearchFormSubmit);
    }

    onSearchFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.searchForm.elements[searchInputName];

        const formattedValue = value.trim().toLowerCase();

        const formattedValueToUpper = formattedValue[0].toUpperCase() + formattedValue.slice(1);

        if (formattedValueToUpper) {
            this.onProductsSearch(formattedValueToUpper);
        }
    }
}
