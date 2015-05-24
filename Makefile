RELEASE_DIR	    = release
TARGET          = release.zip
SRC_DIR         = ShinseiBankAutoLogin

SRCS            = $(notdir $(shell find $(SRC_DIR) -name "*.js"))
TARGET_FILES    = $(addprefix $(RELEASE_DIR)/, $(SRCS))

$(info TARGET_FILES = $(TARGET_FILES))

CLOSURE_COMPILER_DIR = /opt/google/closure-compiler

.PHONY: all
all: $(TARGET)

.PHONY: clean
clean:
	rm -rf $(RELEASE_DIR) $(TARGET)

$(TARGET): $(RELEASE_DIR) $(TARGET_FILES)
	zip -r $(TARGET) $(RELEASE_DIR)

$(RELEASE_DIR):
	mkdir $(RELEASE_DIR)

.SUFFIXES: .js
$(RELEASE_DIR)/%.js: $(SRC_DIR)/%.js
	java -jar $(CLOSURE_COMPILER_DIR)/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js $< --js_output_file $@
