JS_SRC = private.js login.js
TARGET = release_jointed.js
TARGET_COMPILED = release_compiled.js

CLOSURE_COMPILER_DIR = /opt/google/closure-compiler

.PHONY: all
all: $(TARGET)
	java -jar $(CLOSURE_COMPILER_DIR)/compiler.jar --js $(TARGET) --js_output_file $(TARGET_COMPILED)

$(TARGET):
	cat $(JS_SRC) > $(TARGET)

.PHONY: clean
clean:
	rm -f $(TARGET) $(TARGET_COMPILED)
