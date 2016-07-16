# js-ObjectImport
not define

Objects are extensible by default
and their __proto__ property) can be modified.
An object can be marked as non-extensible using:

	-Object.preventExtensions()
		Note:
			that the properties of a non-extensible object, in general, may still be deleted.
			Properties can still be added to the object prototype BUT NOT on its __proto__  property.

	-Object.seal()
			marks all existing properties as non-configurable(fixed and immutable,incancellabili)
			The prototype chain remains untouched. However, the __proto__  property is sealed as well.

	-Object.freeze()
			Nothing can be added to or removed from the properties
			Values cannot be changed for data properties.
			Accessor properties (getters and setters) work the same
			(and still give the illusion that you are changing the value).
			Note that values that are objects can still be modified, unless they are also frozen.

